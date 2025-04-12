import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { saveAs } from "file-saver";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#a832a6",
  "#5c5c5c",
];

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [viewers, setViewers] = useState([]);
  const [viewType, setViewType] = useState("daily");

  useEffect(() => {
    const q = collection(db, "sessions");
    const unsub = onSnapshot(q, (snap) => {
      setViewers(snap.docs.map((doc) => doc.data()));
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
      }));
      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  const filtered = messages.filter(
    (msg) =>
      msg.name?.toLowerCase().includes(search.toLowerCase()) ||
      msg.email?.toLowerCase().includes(search.toLowerCase()) ||
      msg.message?.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (date, type) => {
    const d = new Date(date);
    switch (type) {
      case "daily":
        return d.toLocaleDateString();
      case "weekly": {
        const weekStart = new Date(d);
        weekStart.setDate(d.getDate() - d.getDay());
        return `Week of ${weekStart.toLocaleDateString()}`;
      }
      case "monthly":
        return `${d.toLocaleString("default", {
          month: "short",
        })}'${d.getFullYear().toString().slice(2)}`;
      case "yearly":
        return `${d.getFullYear()}`;
      default:
        return d.toLocaleDateString();
    }
  };

  const groupedMessages = messages.reduce((acc, msg) => {
    if (!msg.createdAt) return acc;
    const key = formatDate(msg.createdAt, viewType);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const trendChartData = Object.entries(groupedMessages).map(([key, value]) => ({
    period: key,
    count: value,
  }));

  const messagesPerUser = messages.reduce((acc, msg) => {
    const email = msg.email;
    if (email) acc[email] = (acc[email] || 0) + 1;
    return acc;
  }, {});

  const userChartData = Object.entries(messagesPerUser).map(
    ([email, count]) => ({
      name: email,
      value: count,
    })
  );

  const exportToCSV = () => {
    const headers = "Period,Count\n";
    const rows = trendChartData.map((item) => `${item.period},${item.count}`).join("\n");
    const csvContent = headers + rows;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `Messages_${viewType}_${new Date().toISOString().split("T")[0]}.csv`);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Typography variant="h6" color="green">
        Active Viewers: {viewers.length}
      </Typography>

      <TextField
        label="Search messages"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TextField
        select
        label="View By"
        value={viewType}
        onChange={(e) => setViewType(e.target.value)}
        SelectProps={{ native: true }}
        sx={{ my: 2 }}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </TextField>

      <Button variant="outlined" color="primary" onClick={exportToCSV} sx={{ mb: 2 }}>
        Export Chart Data
      </Button>

      <Grid container spacing={4} my={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">
            Messages Per {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendChartData}>
              <XAxis
                dataKey="period"
                tick={{ fontSize: 12 }}
                angle={-20}
                textAnchor="end"
              />
              <YAxis allowDecimals={false} />
              <Tooltip
                formatter={(value, name) => [`${value} messages`, "Messages"]}
                labelFormatter={(label) => `Period: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#1976d2"
                strokeWidth={3}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6">Messages Per User</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {userChartData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom>
        All Messages
      </Typography>

      <List>
        {filtered.map((msg) => (
          <React.Fragment key={msg.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={`${msg.name} (${msg.email})`}
                secondary={`${msg.message} — ${msg.createdAt?.toLocaleString()}`}
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
