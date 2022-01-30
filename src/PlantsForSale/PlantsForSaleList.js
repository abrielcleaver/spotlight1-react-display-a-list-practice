import PlantsForSaleItem from './PlantsForSaleItem';

export default function PlantsForSaleList(props) {
  return <div>
    <h2>Congratulations, you rendered PlantsForSaleList</h2>
    {props.forsale.map((forsale, i) => 
    
      <PlantsForSaleItem
        key={`${forsale}-${i}`}
        {...forsale}
      />
    )}
  </div>;
}
