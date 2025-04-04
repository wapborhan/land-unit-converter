"use client";
import { useState, useRef, useEffect, ChangeEvent } from "react";

type UnitType =
  | "base"
  | "shotok"
  | "acre"
  | "katha"
  | "bigha"
  | "kani"
  | "gonda"
  | "kora"
  | "kranti"
  | "til"
  | "";

interface InputValues {
  fromValue: string | number;
  toValue: string | number;
}

interface Types {
  from: UnitType;
  to: UnitType;
}

const useConversion = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    fromValue: "",
    toValue: "",
  });

  const [types, setTypes] = useState<Types>({ from: "", to: "" });

  const baseValues = useRef<Record<Exclude<UnitType, "">, number>>({
    base: 1,
    shotok: 435.6,
    acre: 43560,
    katha: 718.74,
    bigha: 14374.8,
    kani: 17424,
    gonda: 871.2,
    kora: 217.8,
    kranti: 72,
    til: 3.6,
  });

  const calculateValue = (
    value: number,
    fromType: UnitType,
    toType: UnitType
  ): string => {
    if (!fromType || !toType || isNaN(value) || value === 0) return "";
    const fromBase =
      baseValues.current[fromType as keyof typeof baseValues.current];
    const toBase =
      baseValues.current[toType as keyof typeof baseValues.current];
    return ((fromBase / toBase) * value).toFixed(2);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value);

    if (isNaN(numericValue) || numericValue < 0) {
      setInputValues({ fromValue: "", toValue: "" });
      return;
    }

    setInputValues((prev) => {
      const newValues =
        name === "fromValue"
          ? {
              fromValue: numericValue,
              toValue: calculateValue(numericValue, types.from, types.to),
            }
          : {
              fromValue: calculateValue(numericValue, types.to, types.from),
              toValue: numericValue,
            };
      return { ...prev, ...newValues };
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTypes((prev) => ({
      ...prev,
      [name]: value as UnitType,
    }));
  };

  useEffect(() => {
    setInputValues((prev) => ({
      ...prev,
      toValue: calculateValue(
        typeof prev.fromValue === "number"
          ? prev.fromValue
          : parseFloat(prev.fromValue || "0"),
        types.from,
        types.to
      ),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [types.to]);

  useEffect(() => {
    setInputValues((prev) => ({
      ...prev,
      fromValue: calculateValue(
        typeof prev.toValue === "number"
          ? prev.toValue
          : parseFloat(prev.toValue || "0"),
        types.to,
        types.from
      ),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [types.from]);

  return {
    inputValues,
    types,
    handleInputChange,
    handleSelectChange,
  };
};

export default useConversion;
