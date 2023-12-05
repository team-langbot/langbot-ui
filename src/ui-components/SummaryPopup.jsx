import React from 'react';

export default function SummaryPopup() {
  return (
    <dialog className="summaryDialog" id="summaryPopup">
      <h2>Conversation Summary</h2>
      <div className="summaryContainer" >
        <form>
          <p className="summaryPopupText">
          </p>
            <button value="cancel" formMethod="dialog">CLOSE SUMMARY</button>
        </form>
      </div>
    </dialog>)
};