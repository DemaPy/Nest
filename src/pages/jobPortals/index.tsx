import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../utils/api";

const JobPortals = () => {
  const [filters, setFilters] = useState([{
    label: "React",
    isActive: true,
  },
  {
    label: "Vue",
    isActive: false,
  },
  {
    label: "Senior",
    isActive: false,
  },
  {
    label: "C#",
    isActive: false,
  },
  {
    label: "Angular",
    isActive: false,
  }])
  const [jobPortal, setPortal] = useState()
  const { data, isError, isLoading } = useQuery({
    queryKey: [`jobPortals`],
    queryFn: () => api(`http://localhost:3000/job-portal/`),
  });
  if (isError) return "Error"
  if (isLoading) return "Loading"

  const isNoData = !data.length;

  if (!isNoData && !jobPortal) {
    setPortal(data[0])
  }
  return (
    <div style={{ width: '80vw' }}>
      <div style={{ display: 'flex', gap: '0.6rem' }}>
        {!isNoData && jobPortal && (
        <div style={{ width: '30%'}}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '0.6rem', flexDirection: 'column' }}>
            {data?.map(item => <li style={{ cursor: 'pointer', padding: '.6rem', borderRadius: "4px", backgroundColor: item.id === jobPortal?.id ? "#ffffff" : "transparent", color: item.id === jobPortal.id ? "#000000" : "inherit" }} onClick={() => setPortal(item)} key={item.id}>{item.label}</li>)}
          </ul>
        </div>
        )}
        {isNoData && (
          <div style={{ padding: '1rem', }}>
            <h2 style={{ marginBottom: "0px" }}>Add job portal</h2>
            <p style={{ marginTop: "0px", color: 'gray', fontSize: '12px', fontWeight: 'bold'}}>job portal will be parsed every 30 seconds.</p>
            <CreateJobPortal />
          </div>
        )}
        {!isNoData && jobPortal && (
          <div style={{ width: '100%', }}>
            <h4>Parsing results for: {jobPortal.baseUrl}</h4>
            <div style={{ display: 'flex', gap: '.4rem', alignItems: 'center', paddingBlock: '0.6rem' }}>
              Filters:
              <div style={{ display: 'flex', gap: '.4rem' }}>
                {
                  filters.map(item => (<span onClick={() => setFilters(prev => (prev.map(elem => {
                    if (elem.label === item.label) {
                      return {
                        ...elem,
                        isActive: !elem.isActive
                      }
                    }
                    return elem
                  })))} style={{ fontSize: '12px', padding: '0.4rem', border: '1px solid '+(item.isActive ? 'violet' : 'red'), borderRadius: '4px' }}>{item.label}</span>))
                }
              </div>
            </div>
            <div style={{ height: '660px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.4rem'}}>
            {jobPortal.parsing.length > 0 ? jobPortal.parsing.map(item => {
              const baseUrl = "https://justjoin.it/job-offer"; // Change this to your actual base URL
              const contentWithBase = `<base href="${baseUrl}">${item.content}`;
              const dom = new DOMParser().parseFromString(contentWithBase, "text/html")
              return (
                <>
                  {
                    [...dom.querySelectorAll("a[href^='/']")].map(item => {
                      const title = item.parentNode?.lastChild?.querySelector('h3')?.textContent
                      if (title) {
                        const isFilter = filters.find(filter => filter.isActive && title.includes(filter.label))
                        if (isFilter?.isActive) {
                          return (<div style={{ background: "#ffffff", borderRadius: '6px', padding: '6px' }}>
                            <a style={{ cursor: "pointer", color: 'black' }} href={item.href} title={item.href} target="_blank">{title}</a>
                          </div>)
                        }
                      }
                    })
                  }
                </>
              )
              }): (
                <div>
                  <h3>Oooops, looks like cron job still running</h3>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {!isNoData && (
        <div style={{ padding: '1rem', }}>
          <h2 style={{ marginBottom: "0px" }}>Add job portal</h2>
          <p style={{ marginTop: "0px", color: 'gray', fontSize: '12px', fontWeight: 'bold'}}>job portal will be parsed every 30 seconds.</p>
          <CreateJobPortal />
        </div>
      )}
    </div>
  );
};

function CreateJobPortal() {
  const queryClient = useQueryClient()
  const [label, setLabel] = useState("");
  const [baseUrl, setBaseUrl] = useState("");

  const mutate = useMutation({
    onSuccess: () => {
      setLabel('')
      setBaseUrl('')
      queryClient.invalidateQueries({ queryKey: ["jobPortals"] });
    },
    mutationFn: () =>
      api(`http://localhost:3000/job-portal/`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ label, baseUrl }),
        method: "POST",
      }),
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
      <div style={{ display: 'flex', gap: '.4rem' }}>
      <input type="text" placeholder="Label" onChange={(ev) => setLabel(ev.target.value)} />
      <input type="text" placeholder="Base url" onChange={(ev) => setBaseUrl(ev.target.value)} />
      </div>
      <button style={{ width: "100%" }} onClick={() => mutate.mutate()}>Add portal</button>
    </div>
  );
}

export default JobPortals;
