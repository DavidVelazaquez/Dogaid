import React, { useState } from "react";
import { useParams } from "react-router-dom";

import PetItem from "../components/PetItem";
import PetContactCta from "../components/PetContactCta";

import PETS_DATA from "../../shared/util/Mock/petsData";

import styles from "./Pet.module.css";

const Pet = (props) => {
  const petId = useParams().petId;

  console.log(useParams());

  const loadedPet = PETS_DATA.filter((pet) => {
    return pet.id === +petId;
  });

  return loadedPet.map((pet) => {
    return (
      <div className={styles.petPage__wrapper}>
        <PetItem
          key={pet.id}
          image={pet.image}
          petName={pet.petName}
          age={pet.age}
          petDescription={pet.petDescription}
          className={styles.petItem__card}
          showInfo
        />
        <PetContactCta petData={pet} />
      </div>
    );
  });
};

export default Pet;
