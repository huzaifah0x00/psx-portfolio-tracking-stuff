import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">PSX Portfolio Tracker</h1>
      <Button className="mt-4">Get Started</Button>
      <div className="mt-4 flex gap-4">
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </div>
    </main>
  );
}
