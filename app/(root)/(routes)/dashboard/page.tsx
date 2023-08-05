'use client'

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const alats = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10'
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10'
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image'
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
    href: '/video'
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/code'
  }
];

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="mb-8 space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Explore the power of AI
      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Chat with the smartest AI - Experience the power of AI
      </p>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {alats.map((alat) => (
          <Card
            onClick={() => router.push(alat.href)}
            key={alat.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition
            cursor-pointer group"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('p-2 w-fit rounded-md', alat.bgColor)}>
                <alat.icon className={cn('w-8 h-8', alat.color)} />
              </div>
              <div className="font-semibold">{alat.label}</div>
            </div>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition duration-300" />
          </Card>
        ))}
      </div>
    </div>
  );
}
