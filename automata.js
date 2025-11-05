



function print(s) {
    process.stdout.write(s.toString());
}

function mod(i,m) {
    while (i < 0) i += m;while (i > m - 1) i -= m;return i;
}

function get_cell(r,c) {
    return cells[mod(r,rows)*cols + mod(c,cols)];
}

function print_cells() {
    for (let r = 0 ; r < rows; r++) {
        for (let c = 0 ; c < cols; c++) print(get_cell(r,c) + " ");
        print("\n");

    }
    print("\n");
}

function nhood_of(r,c) {
    return get_cell(r-1, c-1) + get_cell(r-1,c) + get_cell(r-1,c+1) + get_cell(r,c);
}

function randomize_cells() {
    for (let i = 0; i < cols*rows; i++) cells[i] = A[Math.floor(Math.random() * 3)];
    console.log(cells);
}

function randomize_cells_hills(p) {
    for (let i = 0; i < cols*rows; i++) cells[i] = A[Math.floor(Math.random() * 2)];
    for (let i = 0; i < cols*rows; i++) if (Math.random() < p) cells[i] = A[2];
    console.log(cells);
}
function randomize_cells_no_fog() {
    for (let i = 0; i < cols*rows; i++) cells[i] = Math.random() < .9 ? flat : hill;
    console.log(cells);
}
function add_random_fog(chance) {
    for (let i = 0; i < cols*rows; i++) if (cells[i] == flat && (Math.random() < chance)) cells[i] = fog;
    console.log(cells);
}


function nhood_from_int(x) {
    return x.toString(3).padStart(4, "0").split("").map(function(i) { return Number(i); }).map(function(i) { return A[i];}).join("");
}

function random_rule() {
    let f = {};
    for (let i = 0; i < 81; i++) f[nhood_from_int(i)] = A[Math.floor(Math.random() * 3)];
    return f;
}
function boring_rule() {
    let f = {};
    for (let i = 0; i < 81; i++) 
        if (nhood_from_int(i)[3] == A[2])
            f[nhood_from_int(i)] = nhood_from_int(i)[3];
        else 
            f[nhood_from_int(i)] = A[Math.floor(Math.random() * 2)];
    console.log(f);
    return f;
}
function show_rule(f) {
    for (let i = 0; i < 81; i++) console.log(i, nhood_from_int(i), f[nhood_from_int(i)]);
}
function apply_rule(f) {
    let new_cells = new Array(rows * cols).fill(0);
    for (let r = 0 ; r < rows; r++) for (let c = 0 ; c < cols; c++) 
        new_cells[r*cols + c] = f[nhood_of(r,c)];
    for (let r = 0 ; r < rows; r++) for (let c = 0 ; c < cols; c++) 
        cells[r*cols + c] = new_cells[r*cols + c];
}



