import styles from "./Animals.module.css";
import AnimalsGallery from "./AnimalsGallery";
import SideBar from "../navigation/SideBar";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../navigation/Card";
import CategoryHeader from "../Layout/CategoryHeader";
import { useState, useEffect } from "react";
import { pages, getPage } from "../../db/pages";

function Animals({ view }) {
    const { type, id } = useParams();

    const animals = getPage({ id: "animals" }).children;

    return (
        <div className={styles.container}>
            {!type && !id && (
                <div className={styles.links}>
                    {animals.map((card) => (
                        <Card key={card.id} data={card} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Animals;
