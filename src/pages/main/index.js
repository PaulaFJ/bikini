import React, { Component } from 'react';
import api from '../../services/api';
import './main.scss';
import banner from '../../img/banner.jpg';

export default class Main extends Component{
	state = {
		products: [],
		productInfo: {},
		page: 1
	}
	componentDidMount() {
		this.loadProducts();
	}

	loadProducts = async () => {
		const response = await api.get('/products?page=${page}');
		const { docs, ... productInfo} = response.data;
		this.setState({products: docs, productInfo});

	};

	prevPage = () => {};

	nextPage = () => {
		const { page, productInfo} = this.state;

		if (page === productInfo.page) return;
		const pageNumber = page + 1;

		this.loadProducts(pageNumber);
	};
	render() {
		const { products } = this.state;
		return (
			<div className="container">
				<img src={banner} alt=""/>

			</div>
		);
	}
}