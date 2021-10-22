
import { Card } from 'components/features';
import t from 'utils/i18nProvider/translate';
import './dashboard.scss'

const Dashboard = (): JSX.Element => {

    return (
        <div className="card-layout">
            <Card title={t('protectionStatus')}><p>{t('details')}</p></Card>
            <Card title={t('vulnerableMachine')}><p>{t('details')}</p></Card>
            <Card title={t('patchInstallationStatus')}><p>{t('details')}</p></Card>
            <Card title={t('cyberProtection')}><p>{t('details')}</p></Card>
        </div>
    )
};

export default Dashboard
