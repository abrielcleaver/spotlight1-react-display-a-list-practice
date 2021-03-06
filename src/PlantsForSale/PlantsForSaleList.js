import PlantsForSaleItem from './PlantsForSaleItem';

export default function PlantsForSaleList(props) {
  return <div>
    <div>
      <h2>Congratulations, you rendered PlantsForSaleList</h2>
    </div>
    <div className="for-sale-list">
      {props.forsale.map((forsale, i) => 
        <PlantsForSaleItem
          key={`${forsale}-${i}`}
          {...forsale}
        />
      )}
    </div>
  </div>;
}
