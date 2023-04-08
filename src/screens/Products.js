import React, {useEffect} from 'react';
import OfferDealsFlyers from '../components/offerDealsFlyers';

export default function Products({route, navigation}) {
  //   useEffect(() => {
  //     navigation.setParams({
  //       products_page_name: route.params.subcategory,
  //     });
  //   }, []);

  return <OfferDealsFlyers />;
}
