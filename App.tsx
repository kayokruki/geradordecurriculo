import React, { useState } from 'react';
import { INITIAL_RESUME_STATE, ResumeData } from './types';
import { ResumeForm } from './components/ResumeForm';
import { ResumePreview } from './components/ResumePreview';
import { Printer, Layout, FileText, Download } from 'lucide-react';

const App: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(INITIAL_RESUME_STATE);
  const [view, setView] = useState<'editor' | 'preview'>('editor');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                 <FileText size={24} />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">AI Resume Forge</span>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Mobile Toggle */}
              <div className="flex md:hidden bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setView('editor')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    view === 'editor' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Editor
                </button>
                <button
                  onClick={() => setView('preview')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    view === 'preview' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Preview
                </button>
              </div>

              <button
                onClick={handlePrint}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 gap-2"
              >
                <Printer size={16} />
                <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-[1920px] mx-auto w-full p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          
          {/* Editor Column - Hidden on mobile if view is preview */}
          <div className={`lg:col-span-5 xl:col-span-4 ${view === 'preview' ? 'hidden lg:block' : 'block'} print:hidden`}>
            <div className="mb-4 flex items-center gap-2 text-gray-700 font-medium">
               <Layout size={18} />
               <h2>Editor de Conteúdo</h2>
            </div>
            <ResumeForm data={resumeData} onChange={setResumeData} />
          </div>

          {/* Preview Column - Hidden on mobile if view is editor */}
          <div className={`lg:col-span-7 xl:col-span-8 ${view === 'editor' ? 'hidden lg:flex' : 'flex'} justify-center bg-gray-200/50 rounded-xl border-2 border-dashed border-gray-300 p-4 lg:p-8 overflow-y-auto print:border-none print:p-0 print:bg-white print:block`}>
             <div className="print:w-full">
               <div className="mb-4 flex items-center justify-between lg:hidden print:hidden">
                  <h2 className="font-medium text-gray-700">Visualização</h2>
               </div>
               {/* Scale transformation for large screens to fit preview nicely if needed, or just auto */}
               <div className="origin-top transform transition-transform duration-200 print:transform-none">
                  <ResumePreview data={resumeData} />
               </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;