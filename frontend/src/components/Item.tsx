import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Box } from "@material-ui/core";
import foodImage from '../assets/images/1.jpeg'
import Button from "@material-ui/core/Button/Button";

export default function ItemComponent(props: any) {
	const [state, setState] = useState({
		items: props.items,
		activeMenu: 'all'
	})

  const handleItemFilterByMenu = (event:any)=> {
		if(parseInt(event.currentTarget.dataset.id) === 0) {
			setState({
				items: props.items,
				activeMenu: 'all'
			})
		} else{
			debugger;
			const filteredItems = props.items.filter((e:any) => e.menuid === parseInt(event.currentTarget.dataset.id))
			setState({
				items:filteredItems,
				activeMenu: String(event.currentTarget.dataset.id)
			})
		}
	
	}

  return (
    <>
		<div>
			<Box boxShadow={3}>
				<Grid container spacing={3}>
					<Grid item xs={3} key={0}>
						<h2 data-id={0} onClick={handleItemFilterByMenu} className={state.activeMenu === 'all' ? 'itemActive': '' }>All</h2>
					</Grid>
					{props.menus.map((menu: { id: number; name: string; }) => (
						<Grid item xs={3} key={menu.id}>
							<h2 data-id={menu.id} onClick={handleItemFilterByMenu} className={String(menu.id)  === state.activeMenu ? 'itemActive': '' } >{menu.name}</h2>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
		{state.items.length === 0 ? <h1>No Food!</h1>: (
			<Grid container spacing={2} style={{marginTop: "50px"}}>
				{state.items.map((item: { id: number; name: string; price: number; description: string }) => (
					<Grid item xs={3} key={item.id}>
						<Card style={{padding: "20px"}}>
							<img src={foodImage} alt="Item"/>
							<h2>{item.name}</h2>
							<h4>$ {item.price}</h4>
							<p>{item.description}</p>
							<Button
								variant="contained"
								color="primary"
							>
								Add to cart
							</Button>
						</Card>		
					</Grid>
				))}
			</Grid>
		)}
    </>
  );
}
