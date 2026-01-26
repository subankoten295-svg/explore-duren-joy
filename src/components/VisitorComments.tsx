import { useState, useEffect } from "react";
import { MessageCircle, User, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Comment {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

const VisitorComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({ name: "", message: "" });

  useEffect(() => {
    const savedComments = localStorage.getItem("visitor-comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast.error("Mohon lengkapi nama dan pesan Anda");
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      message: formData.message.trim(),
      createdAt: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem("visitor-comments", JSON.stringify(updatedComments));
    
    toast.success("Komentar Anda berhasil ditambahkan!");
    setFormData({ name: "", message: "" });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section id="komentar" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Ulasan Pengunjung
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Apa Kata <span className="text-gradient">Mereka?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bagikan pengalaman Anda berkunjung ke THR Sumber Duren
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Comment Form */}
          <Card className="border-0 card-shadow h-fit">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Tulis Komentar
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                    maxLength={50}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Bagikan pengalaman Anda di THR Sumber Duren..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="resize-none"
                    maxLength={500}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Kirim Komentar
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {comments.length === 0 ? (
              <Card className="border-0 card-shadow">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Belum ada komentar. Jadilah yang pertama memberikan ulasan!
                  </p>
                </CardContent>
              </Card>
            ) : (
              comments.map((comment) => (
                <Card key={comment.id} className="border-0 card-shadow animate-fade-up">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-card-foreground">
                            {comment.name}
                          </h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                          {comment.message}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground/70">
                          <Clock className="w-3 h-3" />
                          {formatDate(comment.createdAt)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorComments;
