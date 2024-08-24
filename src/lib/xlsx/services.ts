import * as XLSX from "xlsx";

export function downloadExcel(json: Record<string, any>[]) {
  const worksheet = XLSX.utils.json_to_sheet(json);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: import.meta.env.VITE_MIMETYPE,
  });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "data.xlsx";
  link.click();

  URL.revokeObjectURL(url);
}
