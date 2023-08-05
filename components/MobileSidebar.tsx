'use client';

import { Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './Sidebar';

interface MobileProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = ({ apiLimitCount = 0, isPro = false }: MobileProps) => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button className="md:hidden" variant="ghost" size="sm">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;