import {
  FileText,
  Braces,
  Table2,
  Type,
  ImageIcon,
  ArrowRight,
} from "lucide-react";
export function PdfStudioPreview() {
  return (
    <div
      className="pdf-preview"
      data-motion-scene=""
      role="img"
      aria-label="Illustration of PDF Studio’s template and document generation concept; not a screenshot of a released editor"
    >
      <div className="pdf-toolbar">
        <span>
          <FileText size={16} /> PDF Studio
        </span>
        <span className="preview-label">PRODUCT CONCEPT</span>
        <span className="pdf-export">
          Generate PDF <ArrowRight size={12} />
        </span>
      </div>
      <div className="pdf-workspace">
        <div className="pdf-tools">
          <span>ELEMENTS</span>
          <div>
            <Type /> Text
          </div>
          <div>
            <Table2 /> Table
          </div>
          <div>
            <ImageIcon /> Image
          </div>
          <div>
            <Braces /> Data
          </div>
        </div>
        <div className="pdf-canvas">
          <span className="pdf-scan" aria-hidden="true" />
          <div className="invoice">
            <div className="invoice-top">
              <span>
                ishivox<span className="invoice-dot">.</span>
              </span>
              <span>INVOICE</span>
            </div>
            <div className="invoice-rule" />
            <div className="invoice-heading">
              Good work.
              <br />
              Beautifully documented.
            </div>
            <div className="invoice-meta">
              <div>
                BILL TO<b>{"{{ customer.name }}"}</b>
              </div>
              <div>
                INVOICE NO.<b>{"{{ invoice.number }}"}</b>
              </div>
            </div>
            <div className="invoice-table">
              <div>
                <span>Description</span>
                <span>Amount</span>
              </div>
              <div>
                <span>{"{{ item.description }}"}</span>
                <span>{"{{ item.total }}"}</span>
              </div>
              <div>
                <span className="invoice-line" />
                <span className="invoice-line short" />
              </div>
              <div>
                <span className="invoice-line" />
                <span className="invoice-line short" />
              </div>
            </div>
            <div className="invoice-total">
              <span>Total</span>
              <b>{"{{ total }}"}</b>
            </div>
            <div className="invoice-foot">
              ONE TEMPLATE. ENDLESS POSSIBILITIES.
            </div>
          </div>
        </div>
        <div className="pdf-properties">
          <span>TEMPLATE</span>
          <b>Invoice</b>
          <span>PAGE SIZE</span>
          <b>A4 · Portrait</b>
          <span>DATA BINDINGS</span>
          <code>customer.name</code>
          <code>invoice.number</code>
          <code>items[]</code>
          <span className="binding-state">● Dynamic content</span>
        </div>
      </div>
    </div>
  );
}
