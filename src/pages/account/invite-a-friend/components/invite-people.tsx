import { useState } from 'react';
import { SquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const InvitePeople = () => {
  const [invitepeopleInput, setInvitePeopleInput] = useState('jason@studio.io');
  return (
    <Card>
      <CardHeader id="webhooks">
        <CardTitle>Contact Form</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-32">Subject</Label>
          <div className="grow min-w-48">
            <Input
              className="w-full"
              type="text"
              placeholder="Query Subject"
              // value={invitepeopleInput}
              value={''}
              onChange={(e) => setInvitePeopleInput(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-32">Query</Label>
          <div className="grow min-w-48">
            <Textarea
              className="w-full"            
              placeholder="Write your query here..."
              // value={invitepeopleInput}
              value={''}
              onChange={(e) => setInvitePeopleInput(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export { InvitePeople };
