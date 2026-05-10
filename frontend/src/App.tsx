import { useState, useEffect, type FormEvent } from 'react';
import './App.css';

interface PromptAsset {
  id?: number;
  title: string;
  lighting: string;
  texture: string;
  promptText: string;
  imageUrl: string;
}

function App() {
  const [assets, setAssets] = useState<PromptAsset[]>([]);
  const [formData, setFormData] = useState<PromptAsset>({
    title: '', lighting: '', texture: '', promptText: '', imageUrl: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const filteredAssets = assets.filter(asset => 
    asset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.lighting.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.texture.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchAssets = () => {
    fetch('https://cinematic-asset-studio.onrender.com/api/assets')
      .then(res => res.json())
      .then(data => setAssets(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const url = editingId ? `https://cinematic-asset-studio.onrender.com/api/assets/${editingId}` : 'https://cinematic-asset-studio.onrender.com/api/assets';
    const method = editingId ? 'PUT' : 'POST';

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(() => {
      fetchAssets();
      setFormData({ title: '', lighting: '', texture: '', promptText: '', imageUrl: '' });
      setEditingId(null);
    })
    .catch(err => console.error(err));
  };

  const handleDelete = (id: number | undefined) => {
    if (!id) return;
    fetch(`https://cinematic-asset-studio.onrender.com/api/assets/${id}`, {
      method: 'DELETE',
    })
    .then(() => fetchAssets())
    .catch(err => console.error(err));
  };

  const handleEdit = (asset: PromptAsset) => {
    setFormData(asset);
    setEditingId(asset.id as number);
  };

  const cancelEdit = () => {
    setFormData({ title: '', lighting: '', texture: '', promptText: '', imageUrl: '' });
    setEditingId(null);
  };

  return (
    <div className="studio-container">
      <div className="form-section">
        <h2>{editingId ? "✏️ Edit Asset" : "✨ New Prompt Asset"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Asset Title (e.g. Cyberpunk Alley)" required 
            value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          
          <input type="text" placeholder="Lighting (e.g. Chiaroscuro, Neon)" required 
            value={formData.lighting} onChange={e => setFormData({...formData, lighting: e.target.value})} />
            
          <input type="text" placeholder="Texture (e.g. 35mm film grain)" required 
            value={formData.texture} onChange={e => setFormData({...formData, texture: e.target.value})} />
            
          <input type="text" placeholder="Image URL (Paste an image link here)" required 
            value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} />
            
          <textarea placeholder="Exact AI Prompt used..." rows={4} required 
            value={formData.promptText} onChange={e => setFormData({...formData, promptText: e.target.value})} />
            
          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" style={{ flex: 1 }}>{editingId ? "Update Asset" : "Save Asset"}</button>
            {editingId && (
              <button type="button" onClick={cancelEdit} style={{ flex: 1, backgroundColor: '#3f3f46' }}>Cancel</button>
            )}
          </div>
        </form>
      </div>

      <div className="gallery-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Asset Library ({filteredAssets.length})</h2>
          <input 
            type="text" 
            placeholder="🔍 Search titles, lighting, or textures..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '300px', marginBottom: '0' }}
          />
        </div>
        
        <div className="gallery-grid">
          {filteredAssets.map(asset => (
            <div key={asset.id} className="asset-card">
              <img src={asset.imageUrl} alt={asset.title} onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Invalid+Image+URL'} />
              <div className="card-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3>{asset.title}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      onClick={() => handleEdit(asset)} 
                      style={{ padding: '0.3rem 0.6rem', backgroundColor: '#3b82f6', fontSize: '0.8rem', flexShrink: 0 }}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(asset.id)} 
                      style={{ padding: '0.3rem 0.6rem', backgroundColor: '#dc2626', fontSize: '0.8rem', flexShrink: 0 }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="tags">
                  <span className="tag">{asset.lighting}</span>
                  <span className="tag">{asset.texture}</span>
                </div>
                <p className="prompt-raw">{asset.promptText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;