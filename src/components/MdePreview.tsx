import * as React from "react";

export interface ReactMdePreviewProps {
    className?: string;
    previewRef?: (ref: MdePreview) => void;
    html: string;
    emptyPreviewHtml: string;
}

export interface MdePreviewState {
}

export class MdePreview extends React.Component<ReactMdePreviewProps, MdePreviewState> {
    previewRef: HTMLDivElement;

    render() {
        const {html, className} = this.props;
        return (
            <div className={`mde-preview ${className || ""}`}>
                <div
                    className="mde-preview-content"
                    dangerouslySetInnerHTML={{__html: html || "<p>&nbsp;</p>" }}
                    ref={(p) => this.previewRef = p}
                />
            </div>
        );
    }
}
