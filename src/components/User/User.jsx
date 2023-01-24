import PropTypes from 'prop-types';
import { Text, NativeText } from './User.styled';

export const User = ({ user: { name, email } }) => {
  const userBiz = email.endsWith('biz');
  return (
    <>
      <Text>
        Name: <NativeText>{name}</NativeText>
      </Text>
      <Text>
        Email: <NativeText isRed={userBiz}>{email}</NativeText>
      </Text>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
