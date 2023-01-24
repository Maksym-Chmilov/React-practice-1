import { data } from '../data/user';
import { User } from './User/User';
import { UsersList } from './UsersList/UsersList';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section title="List of users">
        <UsersList users={data} />
      </Section>
      <Section>
        <User user={data[0]} />
      </Section>
    </>
  );
};
