let row;
let children;

function start(event) {
    row = event.target;
}
function dragover(event) {
    let e = event;
    e.preventDefault();

    children = Array.from(e.target.parentNode.parentNode.children);
    if (children.indexOf(e.target.parentNode) > children.indexOf(row)) {

        e.target.parentNode.after(row);

    }
    else {
        let hover_row = children.indexOf(row)
        if (children[0].classList.contains("border")) {
            e.target.parentNode.after(row);
        } else
            e.target.parentNode.before(row);

    }
    sortTable("appt");
    //  sortTable("cart");
}

function sortTable(tableName) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(tableName);
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];

            //check if the two rows should switch place:
            if (x.id.toLowerCase() > y.id.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
let y;
let states = [];
function bookFunction() {
    if (document.getElementById("cart").rows[2] != null) {
        let deletedRow = document.getElementById("cart").rows[2];
        let x = document.getElementById("book").insertRow();
        x.innerHTML = deletedRow.innerHTML;
        y = x.innerHTML;
        states.push(y);
        //alert(y);
        document.getElementById("cart").deleteRow(2);
    }
}

function deleteFunction() {
    //let deletedRow = document.getElementById("book").rows[1];
    if (y != null) {
        if (states.length != 0) {
            document.getElementById("book").deleteRow(states.length);

            let q = document.getElementById("appt").insertRow();
            let h = "<tr draggable='true' ondragstart='start(event)'  ondragover='dragover(event)'> " + states.pop() + " </tr>";
            q.outerHTML = h;
        }
    }
    //alert(q.outerHTML  );
    sortTable("appt");
}