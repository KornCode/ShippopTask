<?php

function task() {
    for ($i = 4; $i >= 0; $i--) {
        for ($j = 0; $j < 5; $j++) {
            if ($j < $i) {
                echo "   ";
            } else {
                echo " o ";
            }
        }
        
        echo "\n";
    }
}

task();