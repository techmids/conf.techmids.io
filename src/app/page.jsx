import { redirect } from 'next/navigation';

export default function Home() {
  redirect('https://conf.techmids.org');
  return null;
}