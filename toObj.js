import axios from "axios";

axios.get("http://localhost:3000").then((res) => {
  const [firstEl, ...rest] = res.data.split("\r\n");
  const first = firstEl.split(",");
  const arrValue = rest.map((el, i, arr) => {
    const [kpi_id, emp_id, month, year, kpi_value, product, kpi_val_in_rupees] =
      el.split(",");
    return {
      [first[0]]: kpi_id,
      [first[1]]: emp_id,
      [first[2]]: month,
      [first[3]]: year,
      [first[4]]: kpi_value,
      [first[5]]: product,
      [first[6]]: kpi_val_in_rupees,
    };
  });
  console.log(arrValue);
});
