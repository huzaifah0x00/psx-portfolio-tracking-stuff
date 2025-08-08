import express from 'express';

interface User {
  email: string;
  password: string;
}

const users: User[] = [];

export const app = express();
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/register', (req, res) => {
  const { email, password } = req.body as Partial<User>;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  const existing = users.find((u) => u.email === email);
  if (existing) {
    return res.status(409).json({ error: 'User already exists' });
  }
  users.push({ email, password });
  res.status(201).json({ message: 'User registered' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body as Partial<User>;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ message: 'Login successful' });
});
