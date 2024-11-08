/*global chrome*/
import React, { useEffect, useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);


export default function ExtensionDialog() {
    const [showExtensionDialog, setShowExtensionDialog] = useState(false);

    useEffect(() => {
        try {
            chrome.runtime.sendMessage("jklpfhklkhbfgeencifbmkoiaokeieah", { message: {} }, response => {
                if (!response || !response.installed) {
                    setShowExtensionDialog(true);
                }
            });
        } catch {
            setShowExtensionDialog(true);
        }
    }, []);

    return (<Dialog open={showExtensionDialog} onClose={() => { setShowExtensionDialog(false) }}>
        <DialogTitle>Downloads may be slow</DialogTitle>
        <DialogContent>
            <DialogContentText>
                SknoX makes the files into chunks of 25mb and uploads your files on Discord and when downloading it takes all the pieces and put it together to make the original file.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => { setShowExtensionDialog(false) }}>Okay</Button>
        </DialogActions>
    </Dialog>
    );
}