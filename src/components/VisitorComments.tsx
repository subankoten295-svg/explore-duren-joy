import { useState, useEffect } from "react";
import { MessageCircle, User, Clock, Send, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface Comment {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const VisitorComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch comments from database
  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching comments:", error);
      toast.error("Gagal memuat komentar");
    } else {
      setComments(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchComments();

    // Subscribe to realtime changes
    const channel = supabase
      .channel("comments-realtime")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "comments",
        },
        (payload) => {
          setComments((prev) => [payload.new as Comment, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      toast.error("Mohon lengkapi nama dan pesan Anda");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("comments").insert({
      name: formData.name.trim(),
      message: formData.message.trim(),
    });

    if (error) {
      console.error("Error submitting comment:", error);
      toast.error("Gagal mengirim komentar. Silakan coba lagi.");
    } else {
      toast.success("Komentar Anda berhasil ditambahkan!");
      setFormData({ name: "", message: "" });
    }

    setIsSubmitting(false);
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
    <section
      id="komentar"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-6">⭐ Ulasan Pengunjung</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Apa Kata <span className="text-gradient">Mereka?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bagikan pengalaman Anda berkunjung ke THR Sumber Duren
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Comment Form */}
          <Card className="border border-border/50 hover-lift h-fit bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  Tulis Komentar
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Nama Anda
                  </label>
                  <Input
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                    maxLength={50}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Pesan
                  </label>
                  <Textarea
                    placeholder="Bagikan pengalaman Anda di THR Sumber Duren..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="resize-none bg-background/50 border-border/50 focus:border-primary"
                    maxLength={500}
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 btn-gradient text-white border-0 font-semibold rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Kirim Komentar
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4 max-h-[550px] overflow-y-auto pr-2 scrollbar-thin">
            {isLoading ? (
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">
                    Memuat komentar...
                  </p>
                </CardContent>
              </Card>
            ) : comments.length === 0 ? (
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Belum ada komentar.
                  </p>
                  <p className="text-muted-foreground/70 text-sm mt-1">
                    Jadilah yang pertama memberikan ulasan!
                  </p>
                </CardContent>
              </Card>
            ) : (
              comments.map((comment, index) => (
                <Card
                  key={comment.id}
                  className="border border-border/50 bg-card/80 backdrop-blur-sm animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-card-foreground truncate">
                          {comment.name}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                          {comment.message}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60 mt-3">
                          <Clock className="w-3 h-3" />
                          {formatDate(comment.created_at)}
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
