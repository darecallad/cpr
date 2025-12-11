'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

function CancelBookingContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const date = searchParams.get('date');
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleCancel = async () => {
    if (!id || !date) return;
    
    setStatus('loading');
    try {
      const res = await fetch('/api/booking/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, date }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to cancel booking');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
    }
  };

  if (!id || !date) {
    return (
      <div className="text-center text-red-500">
        Invalid cancellation link. Missing booking ID or date.
      </div>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center">Cancel Booking</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        {status === 'idle' && (
          <>
            <p className="text-gray-600">
              Are you sure you want to cancel your booking for <strong>{date}</strong>?
            </p>
            <p className="text-sm text-gray-500">
              This action cannot be undone.
            </p>
            <Button variant="destructive" onClick={handleCancel} className="w-full">
              Confirm Cancellation
            </Button>
          </>
        )}

        {status === 'loading' && (
          <div className="flex justify-center py-4">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-2">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
            <p className="text-green-600 font-medium">Booking cancelled successfully.</p>
            <p className="text-sm text-gray-500">A confirmation email has been sent.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-2">
            <XCircle className="h-12 w-12 text-red-500 mx-auto" />
            <p className="text-red-600 font-medium">Cancellation failed</p>
            <p className="text-sm text-gray-500">{message}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function CancelPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <CancelBookingContent />
      </Suspense>
    </div>
  );
}
