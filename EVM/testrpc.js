#!/bin/bash

account1="0x65e740de66e8e56117a22cd420ca1fa962dbcdcbc3dcd5177294d008a3018076"
account2="0x4c71930d306c203e596cdb5b36d73ced69af342454cbb5cc2689d59b0fd9a844"
account3="0x8ff0aae4f54ab4c362750c0b1bae4d56ce6e24d91711bfab9d7a3249e54af3cb"
ether="1000000000000000000000"

testrpc --gasLimit "0x989680" \
        --port "8545" \
        --account="${account1}, ${ether}" \
        --account="${account2}, ${ether}" \
        --account="${account3}, ${ether}" \
