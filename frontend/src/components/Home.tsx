import React, {useEffect} from "react";
import {connect} from "react-redux";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {getMenu, getItem} from "../redux/actions"
import ItemComponent from './Item';
import storeType from '../redux/types/storeTypes';
import HomePrototypes from '../redux/types/HomeProtoTypes';

const HomeComponent: React.FC<HomePrototypes> = ({
    menus,
    items,
    getMenu,
    getItem,
}) =>{

	useEffect(() => {
    getMenu();
    getItem();
	}, [getMenu, getItem]);

 
  return (
    <>
      <Container>
        <Grid className="main-container">
          {items.length === 0 ? <h1>Loading.....</h1>: 
            <ItemComponent menus={menus} items={items}/>
          }
        </Grid>
       
      </Container>
    
    </>
  );
}
const mapStateToProps = (state: storeType) => {
	return {
    menus: state.menuReducer.menu,
    items: state.menuReducer.item
	};
};

export default connect(mapStateToProps, {
  getMenu,
  getItem
})(HomeComponent);
