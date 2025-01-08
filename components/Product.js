import { clsx } from "clsx";
import styles from "./product.module.css";

import React, { useCallback, useEffect, useState } from "react";
import Divider from "@/wrappers/Divider";
import {
  IconChevronRight,
  IconChevronLeft,
  IconChevronDown,
} from "@tabler/icons-react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import productCardData from "../data/mockData";
import { useEffectOnce } from "react-use";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownToggle} onClick={toggleDropdown}>
        {selectedOption} <IconChevronDown className={styles.arrow} stroke={2} />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option) => (
            <button
              key={option}
              className={clsx(styles.dropdownItem, {
                [styles.selected]: selectedOption === option,
              })}
              onClick={() => handleOptionClick(option)}
            >
              {selectedOption === option && (
                <span className={styles.checkmark}>✔</span>
              )}{" "}
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};



export default function Product() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffectOnce(() => {
    if(!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(productCardData));
        setData(productCardData)
    }else {
      const productData = localStorage.getItem("data")
      setData(JSON.parse(productData))
    }
  })

  const handleLiked = useCallback((key) => {
    const product = data.map((item) => {
      if(item.key === key) {
        return {
          ...item,
          isLiked: !item.isLiked
        }
      }
      return item
    })

    localStorage.setItem("data", JSON.stringify(product));
    setData(product)
  },[data])

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productNav}>
        <div className={styles.productCount}>
          <div className={styles.count}>3240 Items</div>
          <button
            className={styles.toggleFilterButton}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {!isFilterOpen ? (
              <>
                <IconChevronLeft className={styles.filterArrow} stroke={2} />{" "}
                Hide Filter
              </>
            ) : (
              <>
                show filter
                <IconChevronRight className={styles.filterArrow} stroke={2} />
              </>
            )}{" "}
          </button>
        </div>
        <Dropdown />
      </div>
      <Divider />
      <div className={styles.productSection}>
        {/* <Filters /> */}
        <div className={styles.productContainer}>
          {data.map((item, index) => <ProductCard productData={item} key={index} handleLiked={handleLiked}/>)}
        </div>
      </div>
    </div>
  );
}
