import React,{useEffect} from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
// import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProducts } from "../../../redux/actions/productAction.js";
import { getAllOrders } from "../../../redux/actions/orderAction.js";
import { getAllUsers } from "../../../redux/actions/userAction.js";

ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement
);

function Dashboard() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    const { orders } = useSelector((state) => state.allOrders);
    const { users } = useSelector((state) => state.allUsers);

    let outOfStock = 0;
    products && products.forEach((item) => {
        if (item.stock === 0) {
            outOfStock += 1;
        }
    });

    let BlnsProducts = products && products.length - outOfStock;

    useEffect(() => {
        dispatch(getAdminProducts())
        dispatch(getAllOrders())
        dispatch(getAllUsers())
    }, [dispatch]);

    let totalAmount = 0;
    orders && orders.forEach((item) => {
        totalAmount += item.totalPrice
    })



    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0, totalAmount],
            },
        ],
    };

    const doughnutState = {
        labels: ["out of Stock", "Instock"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [outOfStock, BlnsProducts],
            },
        ],

    };

    return (
        <div className="container dashboard parent md:h-screen md:grid md:grid-cols-6">
            <section class="sidebar md:col-span-1"> <Sidebar /></section>
           

            <div className="dashboardContainer">
                {/* <Typography component="h1">Dashboard</Typography> */}
                {/* <h1 className="sm:hidden">Dashboard</h1> */}
                <div className="dashboardSummary">
                    <div>
                        <p>
                            Total Amount
                            <br /> ???{totalAmount}
                        </p>
                    </div>

                    <div className="dashboardSummarybox2">
                        <Link to="/admin/products">
                            <p className="sm:text-[10px]">PRODUCTS</p>
                            <p>{products && products.length}</p>
                        </Link>
                        <Link to="/admin/orders">
                            <p>ODERS</p>
                            <p>{orders && orders.length}</p>
                        </Link>
                        <Link to="/admin/users">
                            <p>USERS</p>
                            <p>{users && users.length}</p>
                        </Link>
                    </div>
                </div>
               
                <div className="linechart">
                    <Line data={lineState} />
                </div>

                <div className="doughnutChart">
                    <Doughnut data={doughnutState} />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
