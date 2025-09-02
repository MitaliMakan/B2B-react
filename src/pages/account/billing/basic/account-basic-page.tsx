import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { PageNavbar } from '@/pages/account';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/partials/common/toolbar';
import { useSettings } from '@/providers/settings-provider';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common/container';
import { AccountBasicContent } from '.';

export function AccountBasicPage() {

  const { id } = useParams(); 
  const { settings } = useSettings();

  return (
    <Fragment>
      {/* <PageNavbar /> */}
      {/* {settings?.layout === 'demo1' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                Central Hub for Personal Customization
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Button variant="outline">Order History</Button>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )} */}
      <Container>
        <AccountBasicContent pageid={id}/>
      </Container>
    </Fragment>
  );
}
