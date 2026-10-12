import { useLocale } from '../locales';
import { PolicyDocument } from './PolicyDocument';

export function CrownAndCraftsAddendumPage() {
  const { content } = useLocale();
  return <PolicyDocument policy={content.privacyAddendums.crownAndCrafts} />;
}
