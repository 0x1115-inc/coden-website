import { useLocale } from '../locales';
import { PolicyDocument } from './PolicyDocument';

export function GreenVectorAddendumPage() {
  const { content } = useLocale();
  return <PolicyDocument policy={content.privacyAddendums.greenVector} />;
}
