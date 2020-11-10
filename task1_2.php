<?php

function task() {
    $mid = 4;
    
    for ($i = 0; $i < 5; $i++) {
        for ($j = 0; $j < 9; $j++) {
            if ($j < ($mid - $i) || $j > ($mid + $i)) {
                echo "   ";
            } else {
                echo " o ";
            }
        }
        
        echo "\n";
    }
}

task();