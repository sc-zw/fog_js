
//randomize_cells();
randomize_cells_hills(.1);
plot_cells_page();
//randomize_cells_no_fog();
//let f = random_rule();
let f = boring_rule();
////Sebastian, you can replace the random rule, piece by piece, here. I will put in a few examples
//f[fog + fog + fog + hill] = hill; //the order matters.this is a hill with fog above it. 
//let interval = setInterval(update, delay);
let interval = 0;
function update() {
    plot_cells_page();
    apply_rule(f);
}
