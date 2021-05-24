import * as React from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {
    myGrid = React.createRef<JqxGrid>();

    columns: IGridProps['columns'] = [];

    datafields: any[] = [];

    constructor(props: {}) {
        super(props);
        this.myBtnOnClick = this.myBtnOnClick.bind(this);
        this.generateData = this.generateData.bind(this);
        this.generateData();
        const source: any = {
            datafields: this.datafields,
            totalrecords: 100,
            unboundmode: true
        };
        this.state = {
            columns: this.columns,
            source: new jqx.dataAdapter(source)
        }
    }

              numberrenderer = (row: number, column: any, value: any): string => {
                  return `<div style="text-align: center; margin-top: 5px;">${  1 + value  }</div>`;
              };
          
              myBtnOnClick(): void {
                  this.myGrid.current!.exportdata('xls', 'jqxGrid', false);
              };
          
              generateData(): void {
                  for (let i = 0; i < 26; i++) {
                      const text = String.fromCharCode(65 + i);
                      if (i === 0) {
                          const cssclass = 'jqx-widget-header';
                          this.columns![this.columns!.length] = { pinned: true, exportable: false, text: '', columntype: 'number', cellclassname: cssclass, cellsrenderer: this.numberrenderer };
                      }
                      this.datafields[this.datafields.length] = { name: text };
                      this.columns![this.columns!.length] = { text, datafield: text, width: 60, align: 'center' };
                  }
              }
              
    render() {
        return (
            <div>
                <JqxGrid ref={this.myGrid} 
                    // @ts-ignore
                    width={getWidth('grid')} source={this.state.source} columns={this.state.columns}
                    columnsresize editable selectionmode="multiplecellsadvanced" />
                <div style={{ marginTop: '20px', float: 'left' }}>
                    <JqxButton onClick={this.myBtnOnClick}>Export to Excel</JqxButton>
                </div>
            </div>
        );
    }

}
export default App;