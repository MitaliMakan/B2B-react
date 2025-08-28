import { Fragment } from 'react';
import {
  Bell,
  Boxes,
  FileText,
  IdCard,
  KeySquare,
  LineChart,
  MonitorSmartphone,
  MousePointerSquareDashed,
  Palette,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { IOptionsItems, Options } from './components';

export function AccountGetStartedContent() {
  const items: IOptionsItems = [
    {
      icon: IdCard,
      title: 'Document 1',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
    {
      icon: ShieldCheck,
      title: 'Document 2',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
    {
      icon: FileText,
      title: 'Document 3',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
    {
      icon: Bell,
      title: 'Document 4',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
    {
      icon: Boxes,
      title: 'Document 5',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
    {
      icon: Users,
      title: 'Document 6',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
    {
      icon: KeySquare,
      title: 'Document 7',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
    {
      icon: MousePointerSquareDashed,
      title: 'Document 8',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
    {
      icon: MonitorSmartphone,
      title: 'Document 9',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
    {
      icon: Palette,
      title: 'Document 10',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '#',
    },
    {
      icon: LineChart,
      title: 'Document 11',
      desc: "Document management made easy: Upload, organize, and access all your files in one secure place.",
      path: '/documents',
    },
  ];

  return (
    <Fragment>
      <Options items={items} dropdown={true} />
      <div className="flex grow justify-center pt-5 lg:pt-7.5">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/home">Home</Link>
        </Button>
      </div>
    </Fragment>
  );
}
