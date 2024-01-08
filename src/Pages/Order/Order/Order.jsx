import coverImg from "../../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
  const categories = ['salad','pizza', 'soup', 'desserts', 'drinks']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();


  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={coverImg} title={"Order food"}></Cover>
      <Tabs className={"text-center my-4"} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} ></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
