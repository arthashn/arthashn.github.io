<table border="1">
    <?php
    for ($i = 1; $i <= 10; $i++) {
        echo "<tr>";
        for ($j = 1; $j <= 10; $j++) {
            $hasil = $i * $j; // Perkalian biasa
            echo "<td>$hasil</td>";
        }
        echo "</tr>";
    }
    ?>
</table>