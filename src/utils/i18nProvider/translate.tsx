import { FormattedMessage } from 'react-intl';

const t = (id: string, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;

export default t;
