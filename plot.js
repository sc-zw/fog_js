function plot_cells_page() {
    let s= "";
    for (let r = 0 ; r < rows; r++) {
        for (let c = 0 ; c < cols; c++) s += get_cell(r,c);
        s += "\n";
    }
    (document.getElementById("plot")).value = s;
}



