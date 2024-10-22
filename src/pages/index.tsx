import useGetVisitorType, { VisitorType } from '../hooks/useGetVisitorType';
import BuyerPage from './shop';
import SellerPage from './sell';


export default function HomePage() {
  const { visitorType } = useGetVisitorType();

  return (
    <div>
      {visitorType === VisitorType.Buyer ? <BuyerPage /> : <SellerPage />}
    </div>
  );
}
