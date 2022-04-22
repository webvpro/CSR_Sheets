import { reactive, onMounted, toRefs  } from 'vue'
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import { PDFViewer } from "pdfjs-dist/web/pdf_viewer.js";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import "pdfjs-dist/web/pdf_viewer.css";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function(location, container='pdf-viewer') {
    let state = reactive({
      // error if one happens
      error: null,
      // the results of the query
      pdf: null,
      // if the query is loading or ot
      loading: false
    });
   
    
  
    /**
     * there is the option to load the query when the component
     * is mounted, you need to set the option in the `queryOptions`
     * params that you pass in
     *
     */
    
    const getPdf = async ()=>{
        let container = document.getElementById(container);
        let pdfViewer = new PDFViewer({
            container: container
        });
        state.loading = true;
        let loadingTask = pdfjsLib.getDocument(location);
        let pdf = await loadingTask.promise;
        state.pdf= pdf
        pdfViewer.setDocument(pdf);
        state.loading = false;
    }
    return {
        ...toRefs(state),
        'getPdf': getPdf
    };
    
}    