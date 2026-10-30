import { useLocale } from '../locales';
import { PolicyDocument } from './PolicyDocument';

export function DungeonRaidersAddendumPage() {
  const { content } = useLocale();
  return <PolicyDocument policy={content.privacyAddendums.dungeonRaiders} />;
}
