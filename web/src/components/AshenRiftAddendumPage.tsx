import { useLocale } from '../locales';
import { PolicyDocument } from './PolicyDocument';

export function AshenRiftAddendumPage() {
  const { content } = useLocale();
  return <PolicyDocument policy={content.privacyAddendums.ashenRift} />;
}
