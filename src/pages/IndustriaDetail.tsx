import { useParams } from 'react-router-dom';
import Industrias from './Industrias';

export default function IndustriaDetail() {
  const { slug } = useParams<{ slug: string }>();
  return <Industrias initialSlug={slug} />;
}
